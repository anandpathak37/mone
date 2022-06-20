class AboutsController < ApplicationController
  before_action :set_about, only: [:show, :update, :destroy]

  # GET /abouts
  # GET /abouts.json
  def index
    @abouts = About.all
  end

  # GET /abouts/1
  # GET /abouts/1.json
  def show
  end

  # POST /abouts
  # POST /abouts.json
  def create
    @about = About.new(about_params)

    if @about.save
      render :show, status: :created, location: @about
    else
      render json: @about.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /abouts/1
  # PATCH/PUT /abouts/1.json
  def update
    if @about.update(about_params)
      render :show, status: :ok, location: @about
    else
      render json: @about.errors, status: :unprocessable_entity
    end
  end

  # DELETE /abouts/1
  # DELETE /abouts/1.json
  def destroy
    @about.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_about
      @about = About.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def about_params
      params.require(:about).permit(:title, :body, :published_at, :datetime, :user_id, :image)
    end
end
