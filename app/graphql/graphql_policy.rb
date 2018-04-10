class GraphqlPolicy
  RULES = {
    'User' => {
      email: ->(instance, args, ctx) { instance.object == ctx[:current_user] }
    }
  }

  def self.guard(type, field)
    RULES.dig(type.name, field)
  end
end
