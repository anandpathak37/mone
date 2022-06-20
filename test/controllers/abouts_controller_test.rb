require 'test_helper'

class AboutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @about = abouts(:one)
  end

  test "should get index" do
    get abouts_url, as: :json
    assert_response :success
  end

  test "should create about" do
    assert_difference('About.count') do
      post abouts_url, params: { about: { body: @about.body, datetime: @about.datetime, published_at: @about.published_at, title: @about.title, user_id: @about.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show about" do
    get about_url(@about), as: :json
    assert_response :success
  end

  test "should update about" do
    patch about_url(@about), params: { about: { body: @about.body, datetime: @about.datetime, published_at: @about.published_at, title: @about.title, user_id: @about.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy about" do
    assert_difference('About.count', -1) do
      delete about_url(@about), as: :json
    end

    assert_response 204
  end
end
