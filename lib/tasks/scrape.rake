# require 'open-uri'




# namespace :scrape do
#   desc "Gets the murder rate from countries"
#   task get_murder_rate: :environment do
#    puts "Getting events.." 
#    Event.all.each do |event|  
#     begin
#       page = Nokogiri::HTML(open("http://www..."))
#       page.css('').map(&:text)
      
    
#       event.update_attributes(artist: myhash.keys)
#       event.update_attributes(longprice: myhash.values)
#      rescue
#       puts "Sorry we cannot find data for this event"  
#     end
#    end
#     puts 'done!' 
#   end
# end