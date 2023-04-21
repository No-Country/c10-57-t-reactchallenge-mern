package com.example.conocemelat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
<<<<<<< HEAD
=======
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b

@SpringBootApplication
public class ConocemelatApplication {

<<<<<<< HEAD
=======
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
			}
		};
	}


>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
	public static void main(String[] args) {
		SpringApplication.run(ConocemelatApplication.class, args);
	}

}
