require 'open-uri'




# namespace :scrape do
#   desc "Gets the events from the main page of wegottickts"
#   task get_events: :environment do
#    puts "Getting events.." 
#    Event.all.each do |event|  
#     begin
#       page = Nokogiri::HTML(open("http://www.wegottickets.com/searchresults/page/1/all"))
#       venue = page.css('.ListingAct//.event_link').map(&:text)
#       price = page.css('.ListingPrices').map(&:text)
#       # myhash = venues.zip(prices).to_h


#       event.update_attributes(artist: myhash.keys)
#       event.update_attributes(longprice: myhash.values)
#      rescue
#       puts "Sorry we cannot find data for this event"  
#     end
#    end
#     puts 'done!' 
#   end
# end