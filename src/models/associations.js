const User = require("./user.models");
const Role = require("./role.models");
const UserRole = require("./userRole.models");
const Auth = require("./auth.models");
const Post = require("./post.models");
const Comment = require("./comment.models");
const Like = require("./like.models");
const Favorite = require("./favorite.models");
const Follow = require("./follow.models");

// User <-> Auth
User.hasOne(Auth, { foreignKey: 'id', sourceKey: 'id', as: 'AuthUser' });
Auth.belongsTo(User, { foreignKey: 'id', targetKey: 'id', as: 'AuthUser' });

// User <-> UserRole
User.hasMany(UserRole, { foreignKey: 'user_id', sourceKey: 'id', as: 'urUser' });
UserRole.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'urUser' });

// Role <-> UserRole
Role.hasMany(UserRole, { foreignKey: "role_id", sourceKey: "id", as: "urRole" });
UserRole.belongsTo(Role, { foreignKey: "role_id", targetKey: "id", as: "urRole" });

User.hasMany(Post, { foreignKey: 'user_id', sourceKey: 'id', as: 'uPost' });
Post.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'uPost' });

Post.hasMany(Comment, { foreignKey: 'post_id', sourceKey: 'id', as: 'pComment' });
Comment.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id', as: 'pComment' });

User.hasMany(Comment, { foreignKey: 'user_id', sourceKey: 'id', as: 'uComment' });
Comment.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'uComment' });

User.hasMany(Like, { foreignKey: 'user_id', sourceKey: 'id', as: 'uLike' });
Like.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'uLike' });

Post.hasMany(Like, { foreignKey: 'post_id', sourceKey: 'id', as: 'pLike' });
Like.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id', as: 'pLike' });

User.hasMany(Favorite, { foreignKey: 'user_id', sourceKey: 'id', as: 'uFavorite' });
Favorite.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id', as: 'uFavorite' });

Post.hasMany(Favorite, { foreignKey: 'post_id', sourceKey: 'id', as: 'pFavorite' });
Favorite.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id', as: 'pFavorite' });

User.hasMany(Follow, { foreignKey: 'follower_id', sourceKey: 'id', as: 'uFollower' }); 
Follow.belongsTo(User, { foreignKey: 'follower_id', targetKey: 'id', as: 'uFollower' });

User.hasMany(Follow, { foreignKey: 'following_id', sourceKey: 'id', as: 'uFollowing' });
Follow.belongsTo(User, { foreignKey: 'following_id', targetKey: 'id', as: 'uFollowing' });