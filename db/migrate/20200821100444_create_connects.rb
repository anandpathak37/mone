class CreateConnects < ActiveRecord::Migration[5.2]
  def change
    create_table :connects do |t|
      t.string :email
      t.string :location
      t.string :phone

      t.timestamps
    end
  end
end
