package main.java.com.javainuse.data;

import main.java.com.javainuse.model.Lightning;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Random;

public class LightningsSamples {
    ArrayList<Lightning> lightnings;

    public LightningsSamples() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        lightnings = new ArrayList<>();

        Random rand = new Random();

        double lat = 49;
        double lng = 20;
        for(int i = 0; i < 4; i++) {
            lat += 0.5;
            lng += 0.7;
            for(int j = 0; j < 50; j++) {
                Lightning light = new Lightning(lng + (lng + 1 - lng) * rand.nextDouble(), lat + (lat+1 - lat) * rand.nextDouble(), timestamp.getTime());

                switch(i) {
                    case 0:
                        light.setColor("white");
                        break;
                    case 1:
                        light.setColor("yellow");
                        break;
                    case 2:
                        light.setColor("orange");
                        break;
                    case 3:
                        light.setColor("red");
                        break;
                }

                lightnings.add(light);
            }
        }
    }

    public ArrayList<Lightning> getLightnings() {
        return lightnings;
    }

    public void setLightnings(ArrayList<Lightning> lightnings) {
        this.lightnings = lightnings;
    }
}
