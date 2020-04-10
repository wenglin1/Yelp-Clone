class User < ApplicationRecord
    has_many :reviews

    validates_presence_of :name, :username, :password
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :password, length: { minimum: 4 }

    has_secure_password
end
