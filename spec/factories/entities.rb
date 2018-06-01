FactoryBot.define do
  factory :entity do
    position_x 1
    position_y 1
    can_be_overlapped false
    name "MyString"
    game nil
    map nil
    color 1
    size 1
  end
end
