class Types::Post < GraphQL::Schema::Object
  field :id, ID, null: false
  field :title, String, null: false
  field :description, String, null: false
  field :content, String, null: false
  field :created_at, String, null: false
  field :user, Types::User, null: false
  field :score, Int, null: true

  def user
    BatchLoader.for(object.user_id).batch do |user_ids, loader|
      users = ::User.where(id: user_ids)
      users.each { |user| loader.call(user.id, user) }
    end
  end

  def score
    raise "External API failed"
  end
end
