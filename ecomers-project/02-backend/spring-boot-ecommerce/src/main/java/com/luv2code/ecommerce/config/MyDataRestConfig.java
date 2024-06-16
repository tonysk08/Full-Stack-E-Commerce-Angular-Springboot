package com.luv2code.ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.luv2code.ecommerce.entity.Product;
import com.luv2code.ecommerce.entity.ProductCategory;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer{

    
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        
        HttpMethod[] theUnsuportedAccions = {HttpMethod.PUT, HttpMethod.POST,HttpMethod.DELETE};

        //disable HTTP methosd for products: PUT,POST,DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metdata, httpMethod) -> httpMethod.disable(theUnsuportedAccions))
                .withCollectionExposure((metdata,httpMethod) -> httpMethod.disable(theUnsuportedAccions));

        //disable HTTP methosd for productsCategory: PUT,POST,DELETE
            config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethod) -> httpMethod.disable(theUnsuportedAccions))
                .withCollectionExposure((metdata,httpMethod) -> httpMethod.disable(theUnsuportedAccions));
    }

}
