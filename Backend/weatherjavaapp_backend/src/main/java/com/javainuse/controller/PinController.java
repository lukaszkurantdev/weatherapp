package main.java.com.javainuse.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import main.java.com.javainuse.dao.PinDao;
import main.java.com.javainuse.dao.ReviewDao;
import main.java.com.javainuse.dao.UserDao;
import main.java.com.javainuse.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PinController {

    @Autowired
    private PinDao pinDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ReviewDao reviewDao;

    @RequestMapping({ "/pins" })
    public ResponseEntity<?> getPins(Principal principal) throws Exception {
        List<DAOPin> pins = pinDao.findAll();
        DAOUser user = userDao.findByUsername(principal.getName());

        Date dt = new Date();
        Calendar c = Calendar.getInstance();
        c.setTime(dt);
        c.add(Calendar.DATE, 1);
        final Date ddt = c.getTime();

        pins.stream().filter(p -> p.getDate().after(ddt)).collect(Collectors.toList());

        List<PinsListResponseObject> responseObjectList = new ArrayList<>();

        for(DAOPin pin : pins) {
            responseObjectList.add(new PinsListResponseObject(
                    pin,
                    pin.getUserObject() == user,
                    reviewDao.findByUserAndPin(user, pin) != null
            ));
        }

        return ResponseEntity.ok(responseObjectList);
    }

    @RequestMapping(value = "/pins", method = RequestMethod.POST)
    public ResponseEntity<?> addPin(@RequestBody PinDTO pinReq, Principal principal) throws Exception {

        DAOUser user = userDao.findByUsername(principal.getName());

        if (user == null) {
            throw new Exception("User not found");
        }

        DAOPin newPin = new DAOPin();


        newPin.setDescription(pinReq.getDescription());
        newPin.setTitle(pinReq.getTitle());

        if(pinReq.getImage() != null) {
            newPin.setImage(pinReq.getImage());
        } else {
            newPin.setImage("");
        }
        newPin.setLatitude(user.getLatitude());
        newPin.setLongitude(user.getLongitude());
        newPin.setDate(new Date());
        newPin.setUser(user);

        pinDao.save(newPin);
        return ResponseEntity.ok(newPin);
    }

    @RequestMapping(value = "/pins", method = RequestMethod.PUT)
    public ResponseEntity<?> editPin(@RequestBody PinDTO reportReq, Principal principal) throws Exception {
        DAOUser user = userDao.findByUsername(principal.getName());
        DAOPin pin = pinDao.findById(reportReq.getId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        if (pin.getUserObject() != user) {
            throw new Exception("No privilege to edit`");
        }

        pin.setDescription(reportReq.getDescription());
        pin.setTitle(reportReq.getTitle());

        if(reportReq.getImage() != null) {
            pin.setImage(reportReq.getImage());
        } else {
            pin.setImage("");
        }

        pinDao.save(pin);
        return ResponseEntity.ok(pin);
    }

    @RequestMapping(value = "/pins", method = RequestMethod.DELETE)
    public ResponseEntity<?> removePin(@RequestBody PinDTO reportReq, Principal principal) throws Exception {
        DAOUser user = userDao.findByUsername(principal.getName());
        DAOPin pin = pinDao.findById(reportReq.getId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        if (pin.getUserObject() != user) {
            throw new Exception("No privilege to delete`");
        }

        pinDao.delete(pin);
        return ResponseEntity.ok("Removed");
    }

    @RequestMapping(value = "/location", method = RequestMethod.POST)
    public ResponseEntity<?> changeLocation(@RequestBody LocationDTO req, Principal principal) throws Exception {
        DAOUser user = userDao.findByUsername(principal.getName());

        if (user == null) {
            throw new Exception("User not found");
        }

        user.setLatitude(req.getLatitude());
        user.setLongitude(req.getLongitude());

        userDao.save(user);

        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/review", method = RequestMethod.POST)
    public ResponseEntity<?> addReview(@RequestBody ReviewDTO reviewRequest, Principal principal) throws Exception {
        DAOUser user = userDao.findByUsername(principal.getName());
        DAOPin pin = pinDao.findById(reviewRequest.getPinId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        DAOReview review = reviewDao.findByUserAndPin(user, pin);

        if(review == null) {
            review = new DAOReview();
            review.setDate(new Date());
            review.setPin(pin);
            review.setUser(user);
        }

        review.setThumbUp(reviewRequest.getValue() == 1);
        reviewDao.save(review);
        return ResponseEntity.ok(review);
    }

    @RequestMapping(value = "/review", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteReview(@RequestBody ReviewDTO reviewRequest, Principal principal) throws Exception {
        DAOUser user = userDao.findByUsername(principal.getName());
        DAOPin pin = pinDao.findById(reviewRequest.getPinId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        DAOReview review = reviewDao.findByUserAndPin(user, pin);

        if(review == null) {
            throw new Exception("Review not found");
        }

        reviewDao.delete(review);
        return ResponseEntity.ok(review);
    }
}