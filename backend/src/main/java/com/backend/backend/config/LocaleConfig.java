package com.backend.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.FixedLocaleResolver;

import java.util.Locale;
import java.util.TimeZone;

@Configuration
public class LocaleConfig {

    @Bean
    public LocaleResolver localeResolver() {
        FixedLocaleResolver resolver = new FixedLocaleResolver();
        resolver.setDefaultLocale(new Locale("pt", "BR"));
        return resolver;
    }

    @Bean
    public TimeZone timeZone() {
        TimeZone defaultTimeZone = TimeZone.getTimeZone("America/Sao_Paulo");
        TimeZone.setDefault(defaultTimeZone);
        return defaultTimeZone;
    }
}