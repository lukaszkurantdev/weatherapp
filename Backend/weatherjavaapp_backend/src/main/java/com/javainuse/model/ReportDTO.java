package main.java.com.javainuse.model;

public class ReportDTO {
    long reportId;
    long pinId;
    String reason;

    public ReportDTO(long reportId, long pinId, String reason) {
        this.pinId = pinId;
        this.reason = reason;
        this.reportId = reportId;
    }

    public ReportDTO() {
    }

    public long getPinId() {
        return pinId;
    }

    public void setPinId(long pinId) {
        this.pinId = pinId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public long getReportId() {
        return reportId;
    }

    public void setReportId(long reportId) {
        this.reportId = reportId;
    }
}

