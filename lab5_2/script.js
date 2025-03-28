let comments = [];

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const newComment = {
            text: commentText,
            time: new Date(),
            replies: []
        };
        comments.push(newComment);
        commentInput.value = '';
        renderComments();
    }
}

function addReply(commentIndex) {
    const replyInput = document.getElementById(`reply-input-${commentIndex}`);
    const replyText = replyInput.value.trim();
    if (replyText) {
        const newReply = {
            text: replyText,
            time: new Date()
        };
        comments[commentIndex].replies.push(newReply);
        replyInput.value = '';
        renderComments();
    }
}

function renderComments() {
    const commentSection = document.getElementById('comments-section');
    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <p>${comment.text}</p>
            <p class="comment-time">${comment.time.toLocaleString()}</p>
            <textarea id="reply-input-${index}" class="reply-input" placeholder="Ответить на комментарий..."></textarea>
            <button onclick="addReply(${index})">Ответить</button>
        `;

        if (comment.replies.length > 0) {
            const repliesElement = document.createElement('div');
            repliesElement.className = 'reply';
            comment.replies.forEach(reply => {
                repliesElement.innerHTML += `
                    <div class="comment">
                        <p>${reply.text}</p>
                        <p class="comment-time">${reply.time.toLocaleString()}</p>
                    </div>
                `;
            });
            commentElement.appendChild(repliesElement);
        }

        commentSection.appendChild(commentElement);
    });
}