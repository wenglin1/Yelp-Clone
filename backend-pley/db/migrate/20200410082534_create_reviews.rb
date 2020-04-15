class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :restaurant_id
      t.string :restaurant_name
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
