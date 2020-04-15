class Review < ApplicationRecord
  belongs_to :user

  validates_presence_of :title, :description, :user_id
end
