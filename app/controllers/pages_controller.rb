class PagesController < ApplicationController
	
		
	def create
		@page = Page.new(create_params)
		if @page.save
			render json: @page.as_json(only: [:id, :text, :body])
		else
			render json: {page: {errors: @page.errors}}
		end

	end

	def index
		@pages = Page.all
		render json: @pages
	end

	def update
		@page = Page.find(params[:id])
		@page.body, @page.text  = update_params[:body], update_params[:text]
		if @page.save
			render json: @page
		else
			render json: {errors: @page.errors}
		end
	end

	def destroy
		@page = Page.find params[:id]
		render json: @page
	end

	def create_params
		params.require(:page).permit(:text, :body)
	end

	def update_params
		params.require(:page).permit(:text, :body)
	end
end
