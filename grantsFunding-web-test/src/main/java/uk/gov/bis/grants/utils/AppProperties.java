/*
 * Copyright (C) 2016  Department for Business, Energy and Industrial Strategy
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package uk.gov.bis.grants.utils;

import java.io.FileInputStream;
import java.util.Properties;

public class AppProperties {

    private static Properties properties = null;

    private static String env = System.getenv("ENV");


    public static Properties getProperties() {


        if (properties == null) {
            System.out.println("Properties file area");
            // Check whether the property file location is specified in environment variable "properties"
            // otherwise default
            final String propertyFile;
            if (env == null) {
                propertyFile = System.getProperty("properties", System.getProperty("user.dir") + "/src/test/resources/TestConfig-ci.properties");
            } else {
                propertyFile = System.getProperty("properties", System.getProperty("user.dir") + "/src/test/resources/TestConfig-" + env + ".properties");
            }

            System.out.println("using property file from " + propertyFile);

            try {
                System.out.println("Loading properties from file " + propertyFile);
                properties = new Properties();
                properties.load(new FileInputStream(propertyFile));
            } catch (Throwable e) {
                e.printStackTrace();
            } // try
        } // if

        return properties;
    }


    public static String get(String propertyKey) {
        if (propertyKey.equalsIgnoreCase("browser") ||
                propertyKey.equalsIgnoreCase("env")) {

            if (System.getProperty(propertyKey) != null) {
                return System.getProperty(propertyKey);
            }
        }

        return getProperties().getProperty(propertyKey);
    }

}
