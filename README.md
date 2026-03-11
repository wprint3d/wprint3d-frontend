<div align="center">
    <h1 style="text-align: center;"> WPrint 3D - Frontend </h1>
    <p align="center">
        Web-based remote control frontend for FDM printers via USB serial/TTY.
    </p>
</div>

> [!WARNING]
> This repository is deprecated as a standalone project.
> 
> WPrint 3D now lives in the monorepo: https://github.com/wprint3d/wprint3d
> 
> Please use that repository for current development, setup, and documentation.

## Dependencies

- **Node.js 21.x**
- **Yarn**
- **PNPM**
- **Lighttpd**
- **JQ**
- **File**

## Features

- Compatible with arm64, amd64, and x86 architectures
- Experimental support for Windows via WSL2

## Compatibility information

### Bundle
Platform     | Support            | Notes
-------------|--------------------|--------------
**Web**      | :white_check_mark: | Full support
**Android**  | :heavy_minus_sign: | Planned
**iOS**      | :heavy_minus_sign: | Planned

## Build arguments

These arguments should be controlled from the `docker-compose` file within **wprint3d-core** and you change them by editing the `environment` section of the `web` service.

- `DEVELOPER_MODE`: Set this to `true` to enable developer mode. This will skip the frontend bundle build and keep all development dependencies.

## Usage

This project has moved into the [WPrint 3D monorepo](https://github.com/wprint3d/wprint3d). Please follow that repository for current usage, setup, and development instructions.

## License

WPrint 3D is open-sourced software licensed under the [MIT license](LICENSE).
