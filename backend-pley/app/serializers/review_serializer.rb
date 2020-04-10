class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :restaurant_id
  has_one :user
end
