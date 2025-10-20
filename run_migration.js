const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigration() {
  try {
    console.log('Running migration to add image_urls column...');
    
    // Add image_urls column
    const { error: alterError } = await supabase.rpc('exec_sql', {
      sql: `
        ALTER TABLE products 
        ADD COLUMN IF NOT EXISTS image_urls TEXT[] DEFAULT ARRAY[]::TEXT[];
      `
    });
    
    if (alterError) {
      console.error('Error adding column:', alterError);
      return;
    }
    
    console.log('Column added successfully');
    
    // Update existing products
    const { error: updateError } = await supabase.rpc('exec_sql', {
      sql: `
        UPDATE products 
        SET image_urls = ARRAY[base_image_url] 
        WHERE base_image_url IS NOT NULL AND base_image_url != '';
      `
    });
    
    if (updateError) {
      console.error('Error updating existing products:', updateError);
      return;
    }
    
    console.log('Existing products updated successfully');
    
    // Set default for products without images
    const { error: defaultError } = await supabase.rpc('exec_sql', {
      sql: `
        UPDATE products 
        SET image_urls = ARRAY['/images/products/placeholder.png'] 
        WHERE image_urls IS NULL OR array_length(image_urls, 1) IS NULL;
      `
    });
    
    if (defaultError) {
      console.error('Error setting defaults:', defaultError);
      return;
    }
    
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigration();

