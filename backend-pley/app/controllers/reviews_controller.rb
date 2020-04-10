class ReviewsController < ApplicationController

    before_action :authorized, only: [:create]
    def index
        @reviews = Review.all
        render json: @reviews
    end
    
    def show
        @review = Review.find(params[:id])
        render json: @review
    end 

    def new
        @review = Review.new
        render json: @review
    end

    def create 
        @review = @user.reviews.create(review_params)
        render json: @review
    end

    def update
        @review = Review.find(params[:id])
        @review.update(review_params)
        render json: @review
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        @reviews = Review.all
        render json: @reviews
    end

    private

    def review_params
        params.permit(:description, :rating, :restaurant_id)
    end
end