package com.ayomide.third_space;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ThirdSpaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThirdSpaceApplication.class, args);
	}

}
