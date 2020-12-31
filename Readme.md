# Buildings Website

This is a website developed to show the locations of all NPS buildings
on a map, along with popups with building attributes and photos. The
website also supported searching for a building by the FMSS id number.
This website was built on top of a custom version of the
[NPMap.js](https://github.com/AKROGIS/npmap.js) mapping library.
**This website is now deprecated having been replaced by the
[facilities web app](https://github.com/AKROGIS/Facilities-Website)**.


## Build/Deploy

1) Copy this repo to a webserver
2) Build the `FMSS_Photos` branch of the
[NPMap.js](https://github.com/AKROGIS/npmap.js) and copy to the
webserver. `index.html` assumes that the NPMap libraries are in
a root folder called `npmap` on the server.  Alternatively, you
can copy the npmap files to the sub folder of this project and
edit the path in `index.html`.  Note that the master branch or
the public version of NPMap will not work because this website
uses features only in the `FMSS_Photos` branch to get photos
from the `fmss` folder on the webserver and show them in the
map popup.
3) Create a folder called `data` in the deployed repo.
4) Create a file called `buildings.csv` in the `data` folder.
This file has a row for each building along with the lat/long
of the building and other attributes.  See the 
[make_buildings_csv.py](https://github.com/AKROGIS/Facility-Processing/blob/master/buildings-website-tools/make_buildings_csv.py)
script in the Facility-Processing repo for a tool to create the
file by querying the facilities SQL database.  This file should be
refreshed whenever the DEFAULT version of SDE is updated.

This app assumes that there is a folder called `fmss`
at the root of the webserver, and that this folder contains
a file called `photos.json`, as well as web sized and thumbnail
sized images of the buildings.  The same folder is used by the
facilities web app.  See the
[Facility-Processing](https://github.com/AKROGIS/Facility-Processing)
repo for details on creating and maintaining the photos folder
and the `photos.json` file.
