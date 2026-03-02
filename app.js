(function () {
  'use strict';

  const feed = document.getElementById('feed');
  const sentinel = document.getElementById('scroll-sentinel');
  const loadingEl = document.getElementById('loading');

  // Work through POSTS in order, then loop EXTRA_POSTS randomly
  let postQueue = [...POSTS];
  let extraQueue = [...EXTRA_POSTS];
  let isLoading = false;

  // ── Helpers ─────────────────────────────────────────────────────────────

  function formatCount(n) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(0) + 'k';
    return String(n);
  }

  function topReactionEmojis(reactions) {
    const map = { like: '👍', celebrate: '🎉', love: '❤️', insightful: '💡', curious: '🤔' };
    return Object.entries(reactions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k]) => `<span class="reaction-emoji">${map[k]}</span>`)
      .join('');
  }

  function totalReactions(reactions) {
    return Object.values(reactions).reduce((a, b) => a + b, 0);
  }

  // ── Render a single post ─────────────────────────────────────────────────

  function renderPost(post) {
    const card = document.createElement('article');
    card.className = `post-card absurdity-${post.absurdityLevel}`;
    card.dataset.id = post.id;

    const totalRx = totalReactions(post.reactions);
    const truncate = post.content.length > 250;
    const displayText = truncate ? post.content : post.content;

    const isL5 = post.absurdityLevel === 5;
    const thoughtLeaderBadge = isL5
      ? `<span class="thought-leader-badge">Thought Leader</span>`
      : '';
    const degreeLabel = post.isSponsored
      ? `<span class="sponsored-badge">Promoted</span>`
      : `<span class="connection-degree">1st</span>`;

    card.innerHTML = `
      <div class="post-header">
        <img class="post-avatar" src="${post.avatarUrl}" alt="${post.author}" loading="lazy"
             onerror="this.src='https://i.pravatar.cc/48?img=${(post.id % 70) + 1}'">
        <div class="post-meta">
          <div class="post-author">
            ${post.author}${thoughtLeaderBadge} ${degreeLabel}
          </div>
          <div class="post-title">${post.title}</div>
          <div class="post-time">${post.timeAgo} · 🌐</div>
        </div>
        ${post.isSponsored ? '' : `<button class="follow-btn">+ Follow</button>`}
      </div>

      <div class="post-body">
        <div class="post-text ${truncate ? 'post-text-truncated' : ''}">${escapeHtml(post.content)}</div>
        ${truncate ? `<button class="see-more-btn">…see more</button>` : ''}
        ${post.image ? `<img class="post-image" src="${post.image}" alt="" loading="lazy">` : ''}
      </div>

      <div class="reactions-summary">
        <span class="reactions-count">
          <span class="reaction-emojis">${topReactionEmojis(post.reactions)}</span>
          ${formatCount(totalRx)}
        </span>
        <span class="comments-count">${post.comments.length} comment${post.comments.length !== 1 ? 's' : ''}</span>
      </div>

      <div class="post-actions">
        <button class="action-btn like-btn" data-reaction="like">
          <svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3H14z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          Like
        </button>
        <button class="action-btn comment-btn">
          <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          Comment
        </button>
        <button class="action-btn repost-btn">
          <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M3 11V9a4 4 0 0 1 4-4h14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polyline points="7 23 3 19 7 15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M21 13v2a4 4 0 0 1-4 4H3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Repost
        </button>
        <button class="action-btn send-btn">
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
          Send
        </button>
      </div>

      <div class="comments-section">
        ${post.comments.map(c => `
          <div class="comment">
            <img class="comment-avatar" src="${c.avatarUrl}" alt="${c.author}" loading="lazy"
                 onerror="this.src='https://i.pravatar.cc/32?img=${Math.floor(Math.random()*70)+1}'">
            <div class="comment-bubble">
              <div class="comment-author">${escapeHtml(c.author)}</div>
              <div class="comment-text">${escapeHtml(c.text)}</div>
            </div>
          </div>
        `).join('')}
        <div class="write-comment">
          <img src="https://i.pravatar.cc/32?img=1" alt="You">
          <input type="text" placeholder="Add a comment…" onkeydown="if(event.key==='Enter'){alert('Your comment has been reviewed by The Algorithm and deemed insufficiently engaging. Try again with more buzzwords.');}">
        </div>
      </div>
    `;

    // Attach events
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => toggleLike(likeBtn, post));

    const commentBtn = card.querySelector('.comment-btn');
    commentBtn.addEventListener('click', () => {
      const section = card.querySelector('.comments-section');
      section.classList.toggle('open');
    });

    const commentsCount = card.querySelector('.comments-count');
    commentsCount.addEventListener('click', () => {
      const section = card.querySelector('.comments-section');
      section.classList.toggle('open');
    });

    const seeMoreBtn = card.querySelector('.see-more-btn');
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', () => toggleSeeMore(seeMoreBtn, card));
    }

    const repostBtn = card.querySelector('.repost-btn');
    repostBtn.addEventListener('click', () => {
      repostBtn.classList.toggle('active');
      const txt = repostBtn.classList.contains('active') ? '✓ Reposted' : 'Repost';
      repostBtn.lastChild.textContent = ' ' + txt;
    });

    return card;
  }

  // ── Interaction handlers ─────────────────────────────────────────────────

  function toggleLike(btn, post) {
    btn.classList.toggle('active');
    const summaryEl = btn.closest('.post-card').querySelector('.reactions-count');
    const wasActive = !btn.classList.contains('active'); // just toggled, so invert
    const delta = btn.classList.contains('active') ? 1 : -1;
    post.reactions.like += delta;
    const total = totalReactions(post.reactions);
    summaryEl.innerHTML = `
      <span class="reaction-emojis">${topReactionEmojis(post.reactions)}</span>
      ${formatCount(total)}
    `;
  }

  function toggleSeeMore(btn, card) {
    const textEl = card.querySelector('.post-text');
    if (textEl.classList.contains('post-text-truncated')) {
      textEl.classList.remove('post-text-truncated');
      btn.textContent = 'see less';
    } else {
      textEl.classList.add('post-text-truncated');
      btn.textContent = '…see more';
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Feed loading ─────────────────────────────────────────────────────────

  function nextPosts(count) {
    const posts = [];
    for (let i = 0; i < count; i++) {
      if (postQueue.length > 0) {
        posts.push(postQueue.shift());
      } else {
        // Cycle through extra posts randomly
        if (extraQueue.length === 0) extraQueue = [...EXTRA_POSTS];
        const idx = Math.floor(Math.random() * extraQueue.length);
        const p = { ...extraQueue.splice(idx, 1)[0], id: Date.now() + i };
        posts.push(p);
      }
    }
    return posts;
  }

  function appendPosts(posts) {
    posts.forEach(post => {
      const card = renderPost(post);
      feed.appendChild(card);
      // Small entrance animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(8px)';
      requestAnimationFrame(() => {
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  }

  function loadMorePosts() {
    if (isLoading) return;
    isLoading = true;
    loadingEl.classList.add('visible');

    setTimeout(() => {
      appendPosts(nextPosts(3));
      loadingEl.classList.remove('visible');
      isLoading = false;
    }, 600 + Math.random() * 400);
  }

  // ── Infinite scroll via IntersectionObserver ─────────────────────────────

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) loadMorePosts();
    },
    { rootMargin: '200px' }
  );
  observer.observe(sentinel);

  // ── Init ─────────────────────────────────────────────────────────────────

  function init() {
    appendPosts(nextPosts(5));
  }

  init();
})();
