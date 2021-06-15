package main.java.com.javainuse.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import main.java.com.javainuse.dao.PinDao;
import main.java.com.javainuse.dao.ReportDao;
import main.java.com.javainuse.dao.UserDao;
import main.java.com.javainuse.data.LightningsSamples;
import main.java.com.javainuse.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ReportController {

    @Autowired
    private PinDao pinDao;

    @Autowired
    private ReportDao reportDao;

    @Autowired
    private UserDao userDao;

    @PreAuthorize("hasAuthority('MODERATE_PINES_PRIVILEGES')")
    @RequestMapping({ "/reports" })
    public ResponseEntity<?> getReports() throws Exception {
        List<DAOReport> reports = reportDao.findAll();
        return ResponseEntity.ok(reports);
    }

    @RequestMapping(value = "/reports", method = RequestMethod.POST)
    public ResponseEntity<?> reports(@RequestBody ReportDTO reportRequest, Principal principal) throws Exception {

        DAOUser user = userDao.findByUsername(principal.getName());

        if (user == null) {
            throw new Exception("User not found");
        }

        DAOPin pin = pinDao.findById(reportRequest.getPinId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        DAOReport report = new DAOReport();

        report.setDate(new Date());
        report.setUser(user);
        report.setPin(pin);
        report.setReason(reportRequest.getReason());

        reportDao.save(report);
        return ResponseEntity.ok(report);
    }

    @PreAuthorize("hasAuthority('MODERATE_PINES_PRIVILEGES')")
    @RequestMapping(value = "/accept_report", method = RequestMethod.POST)
    public ResponseEntity<?> acceptReport(@RequestBody ReportDTO reportDTO, Principal principal) throws Exception {

        DAOReport report = reportDao.findById(reportDTO.getReportId());


        if (report == null) {
            throw new Exception("Report not found");
        }

        DAOPin pin = pinDao.findById(report.getPin().getId());

        if (pin == null) {
            throw new Exception("Pin not found");
        }

        pinDao.delete(pin);
        reportDao.delete(report);
        return ResponseEntity.ok("Report removed");
    }

    @PreAuthorize("hasAuthority('MODERATE_PINES_PRIVILEGES')")
    @RequestMapping(value = "/reject_report", method = RequestMethod.POST)
    public ResponseEntity<?> rejectReport(@RequestBody ReportDTO reportDTO, Principal principal) throws Exception {
        DAOReport report = reportDao.findById(reportDTO.getReportId());

        if (report == null) {
            throw new Exception("Report not found");
        }

        reportDao.delete(report);
        return ResponseEntity.ok(report);
    }
}