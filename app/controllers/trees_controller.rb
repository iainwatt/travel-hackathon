class TreesController < ApplicationController


  def index
   
    @trees = Tree.all
    respond_to do |format|
      format.html
      format.json { render json: @trees }
    end
  end

  def show
    @tree = Tree.find(params[:id])
  end
  
end