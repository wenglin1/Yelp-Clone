class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :user_id, :restaurant_id, :restaurant_name
  belongs_to :user
end
