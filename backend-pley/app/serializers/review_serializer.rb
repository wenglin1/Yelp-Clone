class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :user_id, :restaurant_id
  belongs_to :user
end
