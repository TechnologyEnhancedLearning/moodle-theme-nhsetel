## NHSE TEL Moodle theme (Boost extension)

### Requirements

1. Node 19.4
2. Moodle 4.4.4+ with Boost theme

### Installation

1. Clone the repository into your Moodle `theme/nhsetel` directory.

```bash
git clone git@github.com:TechnologyEnhancedLearning/moodle-theme-nhsetel
```

2. Before activating the theme in the Moodle theme selector, the dependencies need loading.

```bash
npm install
```

*Tested with NPM v9.2.0 and Node v19.4.0, you can check both versions with:*
```bash
npm -v
node -v
```

3. Proceed with the Moodle installer instructions when the new theme is detected.


### Configuration

Once installed, navigate to **Site administration > Appearance > Themes > NHSE TEL** to configure custom theme properties:
* **API Settings:** Set the base URL required for dynamic navigation links and search autosuggestions.
* **SCORM Content:** Enable or disable the full-screen toggle buttons.
* **Navigation:** Toggle the visibility of the 'My courses' and 'Calendar' links (these are hidden by default).

### Creating a new GitHub Release

1. Update `version.php` (set `$plugin->version` to a date integer and `$plugin->release` to the semantic version).
2. Update `composer.json` (if dependencies changed).
3. Update `CHANGELOG.md` with user-facing features and fixes.
4. Merge release branch from `develop` to `main`.
5. `git checkout main && git pull`
6. `git tag vX.X.X && git push --tags` (Use semantic versioning for tags, e.g., v1.0.0).
7. Create the release in the GitHub UI using the pushed tag.
8. Allow GitHub Actions to complete.