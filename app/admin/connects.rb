ActiveAdmin.register Connect do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :email, :location, :phone
  form do |f|
    f.inputs do  
      f.input :email                    #   #  ###image_tag (image.object.avatar.url)
      f.input :location 
      f.input :phone
    end
    f.actions

  end
  #
  # or
  #
  # permit_params do
  #   permitted = [:email, :location, :phone]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
