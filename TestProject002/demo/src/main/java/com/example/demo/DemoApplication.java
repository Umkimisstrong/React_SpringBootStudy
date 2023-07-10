package com.example.demo;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import javax.sql.DataSource; 
import org.springframework.core.io.*;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfiguerer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry)
			{

				registry
						.addMapping("/api/**")
						.allowedOrigins("http://localhost:3000")
						;
			}
		};
	}

	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception
	{
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		
		Resource [] res 
		= new PathMatchingResourcePatternResolver().getResources("classpath*:mappers/*Mapper.xml");
		sessionFactory.setMapperLocations(res);

		return sessionFactory.getObject();
	}
}
