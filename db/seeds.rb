print "Removing existing cards... "
Card.destroy_all
puts "Done"

print "Seeding cards... "
(1..20).to_a.each do |i|
  Card.create! name: "Card #{i}"
end
puts "Done"
