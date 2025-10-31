---
title: "Software I use"
draft: false
date: 2025-10-31
---

# Software I use

I keep this page mostly as a reference to myself,
but I publish it in case anyone finds it useful.
I'd be happy to write 
about my experiences or workflows with these tools
if anyone wants me to.

## Linux

I am running [openSuse Tumbleweed](get.opensuse.org/tumbleweed/)
using the KDE Plasma Desktop Environment.
I'm testing between X11 and Wayland.

### General[^1]

- Konsole: Terminal emulator by KDE[^2].
- [Nushell](https://www.nushell.sh/): cross-platform shell (works on Windows!) where structured data is first-class.
- [Obsidian](https://obsidian.md/): markdown text editor and ecosystem.
- [Neovim](https://neovim.io/) (based on [MINIMAX](https://nvim-mini.org/MiniMax/)): modal and very extensible text editor for the terminal.
- [Espanso](https://espanso.org/): open-source text expander. Incredibly useful for repeated text and for symbols not easy to type, like the em dash (—). Note its Wayland support is in development.
- [zoxide](https://github.com/ajeetdsouza/zoxide): an upgrade to `cd` (change directory) that keeps track of the frequency of your visits to directories and lets you change to them with fuzzy finding.
- less: Unix's terminal pager _par excellence_.
- [bat](https://github.com/sharkdp/bat): I mostly use it instead of `less` since it uses `less` in the background but colorizes the output.
- [Typst](https://typst.app/): a modern typesetting system. While still in pre-1.0.0 development, it is simpler and ultimately more powerful than LaTeX.
- [Zellij](https://github.com/zellij-org/zellij): I didn't get it until I used it, then I did. Just try it. It will click.

[^1]: You may notice I haven't listed office suite software. 
I don't use office suites in my personal purposes.
Where I would use a word processor,
I use markdown or typst when I need more power.
Instead of spreadsheets, I use hledger or nushell + json or yaml,
and I basically never need to present slideshows anymore. 

[^2]: I'm interested in [Wezterm](https://wezterm.org/index.html), but I'm done tinkering as of the date of this draft.

### Internet

- [Zen Browser](https://zen-browser.app/) — flatpak version. What Arc Browser should have been.
- See [below](#online-services) for some online services I use.

### File management

- Dolphin: KDE Plasma's default GUI file manager.
- [7zip](https://www.7-zip.org/): the world is a weird, weird place.
- [Calibre](https://calibre-ebook.com/): ebook library manager, but words can't do it justice.
- [Yazi](https://yazi-rs.github.io/): excellent terminal file manager.
- [jj (or jujutsu)](https://github.com/jj-vcs/jj): simple but powerful version control system that builds on, and is compatible with, [Git](https://git-scm.com/).
- [lazygit](https://github.com/jesseduffield/lazygit): terminal user interface (TUI) for Git, for the few occasions when I'm in a Git repository that isn't also a jj repository.
- [restic](https://restic.net/): incremental back up utility with built-in encryption.

### Admin

- [ZSA Keymapp](https://www.zsa.io/flash) + [Custom QMK repo](https://blog.zsa.io/oryx-custom-qmk-features/): for flashing firmware onto my Ergodox EZ and ZSA Voyager keyboards.
- [Impression](https://apps.gnome.org/Impression/): Tool for creating bootable USB drives from `.iso` files.
- [GParted](https://gparted.org/): The age-old disk partition utility.
- [Fastfetch](https://github.com/fastfetch-cli/fastfetch): Utility to display system info to the terminal.
- ssh: For connecting to my home server.
- [tldr](https://github.com/tldr-pages/tldr): Cheatsheet repository for command line utilities.
- [Tailscale](https://tailscale.com/): Black magic VPN-like thing. I use it to connect to my home server outside of home.

### Gaming

- [Steam](https://store.steampowered.com/).
- [Lutris](https://lutris.net/): Manager for game installation and execution. Excellent for running Windows games through Proton.
- Battle.net.

### Media

- [Okular](https://okular.kde.org/): PDF reader by KDE. Also available for Windows! Bonus: can render Markdown and epub.
- VLC: Formerly known as the video player _par excellence_, it's still fantastic, and came preinstalled with openSUSE.

### Language servers (LSP) and formatters

- [Harper](https://writewithharper.com/docs/integrations/language-server): Spell checking in LSP form; very fast and feature-filled.
- [Lua Language Server](https://github.com/LuaLS/lua-language-server): An LSP for Lua. 
- [Dprint](https://dprint.dev/): A formatter for many files. I use it for Markdown.
- [Typstyle](https://github.com/typstyle-rs/typstyle): formatter for Typst.

### Other

- [Brassica Sound Changer](https://github.com/bradrn/brassica): My favourite sound change applier for my constructed languages.
- [Hledger](https://hledger.org/): command line utility for accounting using just plain text files.
- [Starship](https://starship.rs/): customizable, cross-shell terminal prompt.

<!-- ## Windows -->
<!---->
<!-- ### General -->
<!---->
<!-- - Flow Launcher (with Everything search) -->
<!-- - Stardock Start11 -->
<!-- - VSCodium -->
<!-- - Neovim (based on MINIMAX) -->
<!-- - Microsoft Powertoys -->
<!-- - Expanso text expander -->
<!-- - Obsidian -->
<!---->
<!-- ### Internet -->
<!---->
<!-- - Zen Browser -->
<!-- - Internet Download Manager -->
<!-- - Tixati -->
<!---->
<!-- ### File management -->
<!---->
<!-- - Directory Opus 13 -->
<!-- - 7zip -->
<!-- - DB Browser for SQLite -->
<!-- - Teracopy -->
<!-- - Calibre -->
<!-- - Yazi -->
<!-- - Free PDF Compressor -->
<!---->
<!-- ### Admin -->
<!---->
<!-- - Geek Uninstaller -->
<!-- - Treesize Free -->
<!-- - Xmouse button control -->
<!-- - CPUID CPU-Z -->
<!-- - WinaeroTweaker -->
<!-- - ZSA Keymapp + QMK repo -->
<!-- - Razer Synapse -->
<!-- - BleachBit -->
<!---->
<!-- ### Gaming -->
<!---->
<!-- - Playnite -->
<!-- - Steam -->
<!-- - Battle.net -->
<!---->
<!-- ### Media -->
<!---->
<!-- - MPC-HC -->
<!-- - AIMP -->
<!-- - SumatraPDF -->
<!-- - PDFXchange editor -->
<!-- - GIMP -->
<!---->
<!-- ### Other -->
<!---->
<!-- - Brassica Sound Changer -->
<!-- - Hledger -->
<!---->
## Online services

- **Proton suite**: Proton AG is a Swiss technology company that offers services focused on (and known for) privacy through encryption and relatively low data collection, particularly when compared with the Google and Microsoft services it competes with.
    - [Proton Mail](https://proton.me/mail): My main email provider. I especially like it integrates with Proton Pass to provide [hide-my-email aliases](https://proton.me/pass/aliases).
    - [Proton Drive](https://proton.me/drive): Cloud file storage, like Google Drive, Dropbox, or OneDrive.
    - [Proton Pass](https://proton.me/pass): Password manager.
    - [Proton Calendar](https://proton.me/calendar): A cloud calendar manager. I don't particularly need its features or its (limited) integration with other Proton services, but I also don't need something particularly powerful, so might as well.
    - [Proton VPN](https://protonvpn.com/): Among VPNs, designed to be particularly private. I no longer use it too much.
- YouTube Premium: this is my music streamer of choice. If you're using Spotify, you're _really_ missing out on sound quality. You think you don't have a good enough ear to tell the difference? Think again.
- [Raindrop.io](https://raindrop.io/): cloud bookmark manager. I feel I underuse this.

<!-- ## iOS -->
<!---->
<!-- - ... -->

## Home server

I self-host a few services for privacy or just convenience. 
It runs on [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop).
Since I am bad at networking, 
I aim to touch it as little as possible.

- [Gitea](https://about.gitea.com/products/gitea/): a git forge. I use it in addition to, not instead of, GitHub, for my most sensitive repositories.
- [Copyparty](https://github.com/9001/copyparty): a file server.
- [Calibre-web-automated](https://github.com/crocodilestick/Calibre-Web-Automated): a service to access my Calibre library stored on my home server.
- Vim. I can't bother with porting my complete neovim config, so this is good enough.
- While I no longer host them, I experimented with [paperless-ngx](https://docs.paperless-ngx.com/) and [Adguard Home](https://adguard.com/en/adguard-home/overview.html). I 100% recommend them and would use them again, but my family aren't very big fans…
