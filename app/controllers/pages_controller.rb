class PagesController < ApplicationController

  # def index
  #   @pages = Pages.all
  # end
  
  # def show
  #   @page = Page.find(params[:id])
  # end

  # def new
  #   @page = Page.new
  # end

  # def create
  #   @page = Page.new(params[:page])
  #   if @page.save
  #     redirect_to @page, notice: "Successfuly created page ."
  
  #   else
  #     render :new
  #   end
  # end 

  # def edit
  #   @page = Page.find(params[:id])
  # end 

  # def update
  #   @page = Page.find(params[:id])
  #   if @page.update_attributes(params[:page])
  #     redirect_to @page, notice: "Successfuly updated page"
  #   else
  #     render :edit
  #   end
  # end 

  # def destroy
  #   @page.destroy
  #   respond_to do |format|
  #     format.html {redirect_to pages_url, notice: "post was succ"}
  #     format.json {head :no_content}
  #   end
  # end

  # private
  #   def set_page
  #     @page = Page.friendly.find(params[:id])
  #   end

  #   def post_params
  #     params.require(:page).permit(:title, :body)
  #   end
  
  # end


  def about
    @about = About.last
  end

  def blockchain


  end

  def blog
  end

  def career
    @carrer = Carrer.last
  end

  def partner
  end

  def portfolio
  end

  def service
    @service = Service.last
  end

  def service_detail

  end

  def contact
    @connect = Connect.last
  end

  # def show
  #   @user = User.friendly.find(params[:id])
  # end


end

