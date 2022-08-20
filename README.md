# Accordion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Getting started

Clone or download the application. Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Commands used

To generate module :- `ng g module accordion` 

To generate components :-
- `ng g c accordion --module=accordion --export=true --skip-tests=true --inline-template=true`

- `ng g c accordion/accordion-item --flat=true --module=accordion --export=true --skip-tests=true`

**commands explanation**:
- `--module=accordion` will add components to accordion module.
- `--export=true` will add components to export array in module.
- `--skip-tests=true` will skip `spec.ts` file creation.
- `--inline-template=true` will create inline template in `component.ts` file.
- `--flat=true` will skip creating additional folder.
