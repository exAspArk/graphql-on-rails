class Enums::UserRole < GraphQL::Schema::Enum
  value "USER", "User role description", value: :user
  value "ADMIN", "Admin role description", value: :admin
end
