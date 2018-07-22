module Api::V1

  class PhotosController < ApplicationController

    def index
      @photos = Photo.order("created_at DESC")
      render json: @photos
    end

    def create
      @photo = Photo.create(photo_params)
      render json: @photo
    end

    private

      def photo_params
        params.require(:photo).permit(:url, :desc)
      end

  end
end
