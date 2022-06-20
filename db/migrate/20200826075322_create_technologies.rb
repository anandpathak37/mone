class CreateTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :technologies do |t|
      t.string :Ruby
      t.string :Ruby_on_rails
      t.string :python
      t.string :Django
      t.string :Go
      t.string :Angular
      t.string :React
      t.string :VueJs
      t.string :Blockchain
      t.string :Machinelearning
      t.string :datascience
      t.string :Nodejs
      t.string :devopps

      t.timestamps
    end
  end
end
