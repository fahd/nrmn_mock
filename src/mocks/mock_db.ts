import users from './users'
import replies from './replies'
import posts from './posts'
import conversations from './conversations'

const mock_db = {
  auth_user: users['1'],
  users,
  posts,
  replies,
  conversations,
  totalReplies: 10,
}

export default mock_db
