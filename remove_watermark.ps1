Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('c:\Users\user\OneDrive\Desktop\portfolia\src\assets\kamol_about_img.png')
$bmp = New-Object System.Drawing.Bitmap($img)
$g = [System.Drawing.Graphics]::FromImage($bmp)

# Copy a patch from x=820 to x=920 (width 100, height 120, y=320)
$srcRect = New-Object System.Drawing.Rectangle(820, 320, 104, 139)
$destRect = New-Object System.Drawing.Rectangle(920, 320, 104, 139)
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$bmp.Save('c:\Users\user\OneDrive\Desktop\portfolia\src\assets\kamol_about_img.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
