ActiveAdmin.register Carrer do

  permit_params :title, :body

  form do |f|
    f.inputs do  
      f.input :title                    #   #  ###image_tag (image.object.avatar.url)
      f.input :body, as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
    end
  

  f.actions

  end
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :body
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :body]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
