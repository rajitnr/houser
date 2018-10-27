module.exports = {
  readHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log("Inside GET");
    dbInstance
      .read_houses()
      .then(houses => {
        console.log("read", houses);

        res.status(200).send(houses);
      })
      .catch(error => {
        res.status(500).send();
      });
  },
  createHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthlyMortgage,
      desiredRent
    } = req.body;
    console.log("Inside POST", req.body);
    dbInstance
      .create_house([
        property_name,
        address,
        city,
        state,
        zip_code,
        img,
        monthlyMortgage,
        desiredRent
      ])
      .then(() => {
        console.log("After Write");
        dbInstance
          .read_houses()
          .then(houses => {
            res.status(200).send(houses);
          })
          .catch(error => {
            console.log("Error in write", error);
            res.status(500).send(error);
          });
      })
      .catch(error => {
        console.log("Error in write", error);
        res.status(500).send(error);
      });
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log("In for delete", id);
    dbInstance
      .delete_house([id])
      .then(() => {
        console.log("After delete");
        dbInstance.read_houses().then(houses => {
          res.status(200).send(houses);
        });
      })
      .catch(error => {
        console.log("error", error);
        res.status(500).send(error);
      });
  }
};
