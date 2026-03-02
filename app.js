(function () {
  'use strict';

  const feed = document.getElementById('feed');
  const sentinel = document.getElementById('scroll-sentinel');
  const loadingEl = document.getElementById('loading');
  const profileModal = document.getElementById('profile-modal');

  let postQueue = [...POSTS];
  let extraQueue = [...EXTRA_POSTS];
  let isLoading = false;

  // ── Bot pool for satirical auto-replies ──────────────────────────────────

  const BOT_POOL = [
    {
      name: "LinkedIn Algorithm",
      avatar: "https://i.pravatar.cc/32?img=17",
      replies: [
        "This comment is performing well. Consider upgrading to Premium to see who engaged with it.",
        "Your engagement is up 300% this week. The brainrot is working.",
        "Comment detected. Distributing to 47 additional connections who may find it synergistic.",
        "Excellent comment. We are boosting it to people who didn't ask to see it."
      ]
    },
    {
      name: "Motivational Kevin 🔥",
      avatar: "https://i.pravatar.cc/32?img=35",
      replies: [
        "This is EXACTLY what I needed today. Screenshotting. Sending to my accountability group. 🔥🔥",
        "Wow. Just WOW. I've already added this to my vision board.",
        "You SAID it. Nobody else was willing to say it. You said it. 💪",
        "Commenting so I can find this later. This is going in the newsletter."
      ]
    },
    {
      name: "Passive-Aggressive HR",
      avatar: "https://i.pravatar.cc/32?img=49",
      replies: [
        "Friendly reminder that all comments are monitored and may be used in your performance review.",
        "We'd love to connect you with our Chief Culture Officer about this comment.",
        "Have you considered submitting this through our official feedback portal instead?",
        "Great comment! We're looking into whether this aligns with our core values."
      ]
    },
    {
      name: "Course Seller Carla",
      avatar: "https://i.pravatar.cc/32?img=32",
      replies: [
        "I have a free masterclass on exactly this. DM me the word COMMENT to receive it.",
        "This is why I built my 6-week program. Link in bio. Use code COMMENT for 10% off.",
        "I made a Notion template about this. 47 pages. Free with email signup.",
        "Have you thought about turning this comment into a course? I coach people on that. $997."
      ]
    },
    {
      name: "Gary Vee Burner 🐝",
      avatar: "https://i.pravatar.cc/32?img=53",
      replies: [
        "CONTENT. IS. KING. 👑 Document this moment.",
        "Jab jab jab RIGHT HOOK. That's what this comment is.",
        "Document don't create. Or create don't document. Honestly both.",
        "In 2031 everyone will wish they had commented more. You're early."
      ]
    },
    {
      name: "Humble Brad 🙏",
      avatar: "https://i.pravatar.cc/32?img=18",
      replies: [
        "Incredibly humbled to see this comment. You've given me so much to think about. 🙏",
        "I don't say this lightly but: this comment has fundamentally changed how I operate.",
        "Saved. Shared. Printed. Laminated. Thank you for your service.",
        "Just when I think I've seen everything LinkedIn has to offer, you comment this. 🙏🙏🙏"
      ]
    }
  ];

  // ── Reaction map ─────────────────────────────────────────────────────────

  const REACTION_MAP = {
    like:       { emoji: '👍', label: 'Like',       color: '#0a66c2' },
    celebrate:  { emoji: '🎉', label: 'Celebrate',  color: '#44712e' },
    love:       { emoji: '❤️',  label: 'Love',        color: '#b24020' },
    insightful: { emoji: '💡', label: 'Insightful',  color: '#915907' },
    curious:    { emoji: '🤔', label: 'Curious',     color: '#7d5af1' },
  };

  // ── Web Audio engine ──────────────────────────────────────────────────────

  let audioCtx = null;
  function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  function playTone(freq, duration, type = 'sine', volume = 0.25) {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  }

  function playReactionSound(key) {
    const t = audioCtx ? audioCtx.currentTime : 0;
    switch (key) {
      case 'like':
        playTone(440, 0.08); setTimeout(() => playTone(660, 0.12), 80); break;
      case 'celebrate':
        playTone(523, 0.07); setTimeout(() => playTone(659, 0.07), 80); setTimeout(() => playTone(784, 0.15), 160); break;
      case 'love':
        playTone(392, 0.3, 'sine', 0.2); break;
      case 'insightful':
        playTone(528, 0.25, 'sine', 0.22); break;
      case 'curious':
        playTone(300, 0.15); setTimeout(() => playTone(340, 0.2), 60); break;
    }
  }

  function playConnectSound() {
    initAudio();
    playTone(440, 0.1); setTimeout(() => playTone(523, 0.1), 110); setTimeout(() => playTone(659, 0.2), 220);
  }

  // ── Reaction picker ───────────────────────────────────────────────────────

  const picker = document.getElementById('reaction-picker');
  let pickerCurrentPost = null;
  let pickerCurrentBtn = null;
  let pickerHideTimer = null;

  function showPicker(likeBtn, post) {
    clearTimeout(pickerHideTimer);
    pickerCurrentPost = post;
    pickerCurrentBtn = likeBtn;
    const rect = likeBtn.getBoundingClientRect();
    picker.style.bottom = (window.innerHeight - rect.top + 8) + 'px';
    picker.style.left = rect.left + 'px';
    picker.classList.remove('hidden');
  }

  function hidePicker() {
    pickerHideTimer = setTimeout(() => picker.classList.add('hidden'), 150);
  }

  function selectReaction(key, post, likeBtn) {
    const { emoji, label, color } = REACTION_MAP[key];
    const emojiSpan = likeBtn.querySelector('.reaction-emoji-label');
    const textSpan  = likeBtn.querySelector('.reaction-text-label');

    if (post._userReaction === key) {
      // Toggle off
      post.reactions[key] = Math.max(0, post.reactions[key] - 1);
      post._userReaction = null;
      likeBtn.classList.remove('active', 'has-emoji');
      likeBtn.style.color = '';
      emojiSpan.textContent = '';
      textSpan.textContent = 'Like';
    } else {
      if (post._userReaction) {
        post.reactions[post._userReaction] = Math.max(0, post.reactions[post._userReaction] - 1);
      }
      post.reactions[key] = (post.reactions[key] || 0) + 1;
      post._userReaction = key;
      likeBtn.classList.add('active', 'has-emoji');
      likeBtn.style.color = color;
      emojiSpan.textContent = emoji + '\u00A0' + label;
      textSpan.textContent = '';
    }

    const summaryEl = likeBtn.closest('.post-card').querySelector('.reactions-count');
    summaryEl.innerHTML = `<span class="reaction-emojis">${topReactionEmojis(post.reactions)}</span>${formatCount(totalReactions(post.reactions))}`;

    picker.classList.add('hidden');
    playReactionSound(key);
  }

  // Wire picker buttons (once)
  picker.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (pickerCurrentPost && pickerCurrentBtn) {
        selectReaction(btn.dataset.reaction, pickerCurrentPost, pickerCurrentBtn);
      }
    });
  });
  picker.addEventListener('mouseenter', () => clearTimeout(pickerHideTimer));
  picker.addEventListener('mouseleave', hidePicker);

  // ── Helpers ──────────────────────────────────────────────────────────────

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

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildCommentEl(author, avatarUrl, text, isNew) {
    const el = document.createElement('div');
    el.className = 'comment' + (isNew ? ' comment-new' : '');
    el.innerHTML = `
      <img class="comment-avatar" src="${avatarUrl}" alt="${escapeHtml(author)}" loading="lazy"
           onerror="this.src='https://i.pravatar.cc/32?img=${Math.floor(Math.random() * 70) + 1}'">
      <div class="comment-bubble">
        <div class="comment-author">${escapeHtml(author)}</div>
        <div class="comment-text">${escapeHtml(text)}</div>
      </div>
    `;
    if (isNew) {
      el.addEventListener('animationend', () => el.classList.remove('comment-new'), { once: true });
    }
    return el;
  }

  // ── Comment system ───────────────────────────────────────────────────────

  function addComment(card, post, text) {
    const section = card.querySelector('.comments-section');
    const writeRow = card.querySelector('.write-comment');

    const commentEl = buildCommentEl('You, Probably', 'https://i.pravatar.cc/32?img=1', text, true);
    section.insertBefore(commentEl, writeRow);

    post.comments.push({ author: 'You, Probably', text });
    updateCommentCount(card, post);

    card.querySelector('.comment-input').value = '';

    const delay = 1200 + Math.random() * 800;
    setTimeout(() => addBotReply(card, post), delay);
  }

  function addBotReply(card, post) {
    const section = card.querySelector('.comments-section');
    const writeRow = card.querySelector('.write-comment');

    const bot = BOT_POOL[Math.floor(Math.random() * BOT_POOL.length)];
    const reply = bot.replies[Math.floor(Math.random() * bot.replies.length)];

    const commentEl = buildCommentEl(bot.name, bot.avatar, reply, true);
    section.insertBefore(commentEl, writeRow);

    post.comments.push({ author: bot.name, text: reply });
    updateCommentCount(card, post);
  }

  function updateCommentCount(card, post) {
    const countEl = card.querySelector('.comments-count');
    const n = post.comments.length;
    countEl.textContent = `${n} comment${n !== 1 ? 's' : ''}`;
  }

  // ── Profile modal ────────────────────────────────────────────────────────

  function openProfile(postId) {
    const profile = PROFILES[postId];
    const post = [...POSTS, ...EXTRA_POSTS].find(p => p.id === postId);
    if (!post) return;

    if (!profile) {
      document.getElementById('modal-cover-img').src = 'https://picsum.photos/seed/default/800/200';
      document.getElementById('modal-avatar').src = post.avatarUrl;
      document.getElementById('modal-name').textContent = post.author;
      document.getElementById('modal-title').textContent = post.title;
      document.getElementById('modal-connections').textContent = '500+ connections';
      document.getElementById('modal-about').textContent = 'This profile is currently being optimized for the algorithm. Please check back after the next content drop.';
      document.getElementById('modal-experience').innerHTML = '<p style="color:var(--text-secondary);font-size:13px;">Experience data is being strategically curated. Stand by.</p>';
      document.getElementById('modal-skills').innerHTML = '<span class="skill-chip">Synergy</span><span class="skill-chip">Growth</span><span class="skill-chip">Disruption</span>';
      document.getElementById('modal-featured').textContent = 'Featured content loading... (sponsored by BrainBust®)';
      profileModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      return;
    }

    document.getElementById('modal-cover-img').src = profile.coverUrl;
    document.getElementById('modal-avatar').src = post.avatarUrl;
    document.getElementById('modal-name').textContent = post.author;
    document.getElementById('modal-title').textContent = post.title;
    document.getElementById('modal-connections').textContent = profile.connections + ' connections';
    document.getElementById('modal-about').textContent = profile.about;

    const expEl = document.getElementById('modal-experience');
    expEl.innerHTML = profile.experience.map(e => `
      <div class="exp-item">
        <div class="exp-title">${escapeHtml(e.title)}</div>
        <div class="exp-company">${escapeHtml(e.company)} · ${escapeHtml(e.duration)}</div>
        <div class="exp-desc">${escapeHtml(e.desc)}</div>
      </div>
    `).join('');

    const skillsEl = document.getElementById('modal-skills');
    skillsEl.innerHTML = profile.skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('');

    document.getElementById('modal-featured').textContent = profile.featured;

    // Education section
    const eduSection = document.getElementById('modal-education-section');
    if (profile.education && profile.education.length > 0) {
      document.getElementById('modal-education').innerHTML = profile.education.map(e => `
        <div class="exp-item">
          <div class="exp-title">${escapeHtml(e.school)}</div>
          <div class="exp-company">${escapeHtml(e.degree)} · ${escapeHtml(e.year)}</div>
        </div>
      `).join('');
      eduSection.style.display = '';
    } else {
      eduSection.style.display = 'none';
    }

    profileModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProfile() {
    profileModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Wire up modal close targets
  document.getElementById('modal-close-btn').addEventListener('click', closeProfile);
  document.getElementById('modal-backdrop').addEventListener('click', closeProfile);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProfile(); });

  // Connect buttons in modal — satirical behavior
  document.getElementById('modal-connect-btn').addEventListener('click', function () {
    playConnectSound();
    this.textContent = 'Pending ✓';
    this.style.background = 'var(--linkedin-blue-light)';
    this.disabled = true;
  });
  document.getElementById('modal-message-btn').addEventListener('click', function () {
    alert('Your message has been placed in a queue behind 4,000 other messages. Estimated response time: never. Consider upgrading to Premium.');
  });

  // ── Render a single post ─────────────────────────────────────────────────

  function renderPost(post) {
    const card = document.createElement('article');
    card.className = `post-card absurdity-${post.absurdityLevel}`;
    card.dataset.id = post.id;

    const totalRx = totalReactions(post.reactions);
    const truncate = post.content.length > 250;

    const isL5 = post.absurdityLevel === 5;
    const thoughtLeaderBadge = isL5
      ? `<span class="thought-leader-badge">Thought Leader</span>`
      : '';
    const degreeLabel = post.isSponsored
      ? `<span class="sponsored-badge">Promoted</span>`
      : `<span class="connection-degree">1st</span>`;

    card.innerHTML = `
      <div class="post-header">
        <img class="post-avatar" src="${post.avatarUrl}" alt="${escapeHtml(post.author)}" loading="lazy"
             onerror="this.src='https://i.pravatar.cc/48?img=${(post.id % 70) + 1}'" style="cursor:pointer">
        <div class="post-meta">
          <div class="post-author" style="cursor:pointer">
            ${escapeHtml(post.author)}${thoughtLeaderBadge} ${degreeLabel}
          </div>
          <div class="post-title">${escapeHtml(post.title)}</div>
          <div class="post-time">${escapeHtml(post.timeAgo)} · 🌐</div>
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
        <button class="action-btn like-btn">
          <svg class="reaction-svg" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3H14z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          <span class="reaction-emoji-label"></span><span class="reaction-text-label">Like</span>
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
            <img class="comment-avatar" src="${c.avatarUrl}" alt="${escapeHtml(c.author)}" loading="lazy"
                 onerror="this.src='https://i.pravatar.cc/32?img=${Math.floor(Math.random() * 70) + 1}'">
            <div class="comment-bubble">
              <div class="comment-author">${escapeHtml(c.author)}</div>
              <div class="comment-text">${escapeHtml(c.text)}</div>
            </div>
          </div>
        `).join('')}
        <div class="write-comment">
          <img src="https://i.pravatar.cc/32?img=1" alt="You">
          <input type="text" class="comment-input" placeholder="Add a comment… (press Enter)">
        </div>
      </div>
    `;

    // Like — hover shows picker after 400ms, direct click quick-Likes
    const likeBtn = card.querySelector('.like-btn');
    post._userReaction = null;
    let hoverTimer;
    likeBtn.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => showPicker(likeBtn, post), 400);
    });
    likeBtn.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      hidePicker();
    });
    likeBtn.addEventListener('click', () => {
      clearTimeout(hoverTimer);
      selectReaction('like', post, likeBtn);
    });

    // Comment toggle
    const commentBtn = card.querySelector('.comment-btn');
    commentBtn.addEventListener('click', () => {
      const section = card.querySelector('.comments-section');
      section.classList.toggle('open');
      if (section.classList.contains('open')) {
        card.querySelector('.comment-input').focus();
      }
    });

    const commentsCount = card.querySelector('.comments-count');
    commentsCount.addEventListener('click', () => {
      const section = card.querySelector('.comments-section');
      section.classList.toggle('open');
    });

    // Comment input — Enter to submit
    const commentInput = card.querySelector('.comment-input');
    commentInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && commentInput.value.trim()) {
        addComment(card, post, commentInput.value.trim());
      }
    });

    // See more
    const seeMoreBtn = card.querySelector('.see-more-btn');
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', () => toggleSeeMore(seeMoreBtn, card));
    }

    // Repost
    const repostBtn = card.querySelector('.repost-btn');
    repostBtn.addEventListener('click', () => {
      repostBtn.classList.toggle('active');
      repostBtn.lastChild.textContent = repostBtn.classList.contains('active') ? ' ✓ Reposted' : ' Repost';
    });

    // Profile open — avatar and author name
    const avatarEl = card.querySelector('.post-avatar');
    const authorEl = card.querySelector('.post-author');
    avatarEl.addEventListener('click', () => openProfile(post.id));
    authorEl.addEventListener('click', () => openProfile(post.id));

    return card;
  }

  // ── Interaction handlers ─────────────────────────────────────────────────

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

  // ── Feed loading ─────────────────────────────────────────────────────────

  function nextPosts(count) {
    const posts = [];
    for (let i = 0; i < count; i++) {
      if (postQueue.length > 0) {
        posts.push(postQueue.shift());
      } else {
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

  // ── Infinite scroll ───────────────────────────────────────────────────────

  const observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) loadMorePosts(); },
    { rootMargin: '200px' }
  );
  observer.observe(sentinel);

  // ── Init ──────────────────────────────────────────────────────────────────

  appendPosts(nextPosts(5));
})();
