README: 

This file introduces the potential software product for CS-400-ON at Bellarmine University.

**The Product** 

Used toy exchange and donation application

**Name Options** 

	- Play It Forward
	- Toy Share
	- Well Played Toys

**Potential Customers/End users**

    - People seeking to sell toys*
    - People seeking to donate toys
    - People seeking donations of toys
    - Non-profits to donate toys directly to
    - Trade of toys - younger seeking older toys and vice versa
	
**Potential Features and Functions** 

	- Location (even neighborhood)-based
	- Searchable scroll for toys in your area
	- Seeking to purchase, sell, or donate, or donate to
	- Non-profits would receive advertising for donations of toys as well where people could go to receive toys
	- Specific to toys only (No gaming or computer-type items) in different age ranges
		i.e.: Ages 0-1, 1-3, 3-5, 6-9, 10-12
		(Not focused on teen-aged toys - for younger kids)
	- *Heavily leaning to donations and trades rather than sales. Might reduce sales piece altogether as Marketplace does that 		pretty well.
	
**Product Vision Statement**

Play It Forward seeks to make sure all children have the appropriate toys to foster learning throughout childhood. Play It Forward seeks to unite those wishing to get rid of toys their children have grown out of with those seeking to find new toys for their younger children to play with. All toys listed are in usable condition with plenty of life and love left in them. Play It Forward focuses on toys played with and loved by younger ages with a primary focus on learning-type toys to provide educational opportunities for those who may not have as many toys intended for learning. Play It Forward also will lean on non-profit organizations - as donatees and donators - to help fill the gaps of toys needing to be properly placed. 

**Project Structure**

	**Getting Started**
	1. Make sure Docker is installed on your machine.
	2. Clone the repository or download as a zip file.
	3. Navigate to the project directory.
   		- Command: play-it-forward-prototype-copy
	4. Start the docker container.
   		- Command: docker -compose up --build -d
	5. Open the application in your browser.
 		- http://localhost:3000
	**Running Test Cases**
	1. Find your container id.
   		- Command: docker ps
	2. Enter the container:
   		- Command: docker exec:  -it <container number> sh
	3. Run the tests:
   		- Command: npm test

**How to Use the Protoype**

1. Make sure docker is up and running. If there servers are not running, the application will not work.
2. Open: http://localhost:3000
3. You will be brought the the homepage of the application.
4. Click on the browse button to view the current items for sale, free for dontaion, or items people are looking for.
   - You can filter items by state.
   - You can filter items by age range.
   - Make sure to click the 'apply' button for your filters to show.
5. If you want to come back to an item later, you can click the save for later button.
   - In the menu bar, you can navigate to your saved items.
   - If you want to remove an item from your saved items, you can select 'remove'.
