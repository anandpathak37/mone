ActiveAdmin.register Service do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :web, :mobile, :IoT, :BigD, :EnterAp, :AI, :QA, :dev, :design
  #

  form do |f|
    f.inputs do                      
      f.input :web,label: 'WebDevelopmetPage', as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :mobile,label: "MobiledevelopmentPage", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :IoT, label: "IoTPage",as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :BigD,label: "BigDataPage", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :EnterAp,label: "EnterpricesApps", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :AI,label: "ArtificialIntelligence", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :QA,label: "SoftwareTesting", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :dev,label: "Devoops" ,as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }
      f.input :design,label:"Webdesign", as: :ckeditor,  input_html: { ckeditor: { toolbar: 'Full' } }

    end
  f.actions
  end
  #
  # permit_params do
  #   permitted = [:web, :mobile, :IoT, :BigD, :EnterAp, :AI, :QA, :dev, :design]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
