class AddImageToBoardGames < ActiveRecord::Migration[5.2]
  def change
  	add_column :abouts, :image, :string

  end
end