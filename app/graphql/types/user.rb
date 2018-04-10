class Types::User < GraphQL::Schema::Object
  field :id, ID, null: false
  field :name, String, null: false
  field :created_at, String, null: false
  field :role, Enums::UserRole, null: false
  field :email, String, null: true
end
