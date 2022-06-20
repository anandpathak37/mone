class CreateAbouts < ActiveRecord::Migration[5.2]
  def change
    create_table :abouts do |t|
      t.string :title
      t.text :body
      t.string :published_at
      t.string :datetime
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
