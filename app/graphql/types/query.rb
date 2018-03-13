class Types::Query < GraphQL::Schema::Object
  field :posts, [Types::Post], null: false

  def posts
    ::Post.all
  end
end
